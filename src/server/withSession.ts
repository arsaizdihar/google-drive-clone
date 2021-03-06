import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next'
import { ISimpleUser } from '~/type'
import { getUser } from './auth/user'

type Handler = (
  ctx: GetServerSidePropsContext,
  user: ISimpleUser | null
) => Promise<GetServerSidePropsResult<any>>

type WithSessionConfig =
  | {
      force?: boolean
      handler?: Handler
      adminOnly?: boolean
    }
  | undefined

export const withSession =
  ({ force = false, handler }: WithSessionConfig = {}): GetServerSideProps =>
  async (ctx) => {
    const user = await getUser(ctx.req)
    if (!user && force) {
      return {
        redirect: {
          destination: `/login${
            ctx.req.url ? '?callbackUrl=' + ctx.req.url : ''
          }`,
          permanent: false,
        },
      }
    }
    if (handler) {
      const result = await handler(ctx, user)
      if ('props' in result) {
        const props = await result.props
        return {
          ...result,
          props: {
            user,
            ...props,
          },
        }
      } else return result
    }

    return { props: { user } }
  }
