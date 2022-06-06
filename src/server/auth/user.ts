import bcrypt from 'bcryptjs'
import { getCookie } from 'cookies-next'
import { OptionsType } from 'cookies-next/lib/types'
import jwt from 'jsonwebtoken'
import config from '../config'
import db from '../prisma'

export const SIMPLE_USER_QUERY = {
  id: true,
  email: true,
} as const

export const verifyJWT = (token: string) => {
  const decoded = jwt.verify(token, config.token.secret)
  if (typeof decoded !== 'object') return null
  return decoded.id as string
}

export const getUserId = (req: OptionsType['req']) => {
  const id = (req as any).userId
  if (id) return id as string
  const token = getCookie('token', { req })
  if (!token || typeof token !== 'string') return null
  try {
    const userId = verifyJWT(token)
    if (userId) {
      ;(req as any).userId = userId
    }
    return userId
  } catch (error) {
    console.log(error)
    return null
  }
}

export const getUser = async (req: OptionsType['req']) => {
  if ((req as any).user) {
    return (req as any).user as {
      id: string
      email: string
    }
  }
  const id = getUserId(req)
  if (!id) return null
  const user = await db.user.findUnique({
    where: { id },
    select: SIMPLE_USER_QUERY,
  })
  ;(req as any).user = user
  return user
}

export async function registerUser(email: string, password: string) {
  const hashed = bcrypt.hashSync(password, 10)

  const user = await db.user.create({
    data: {
      email,
      password: hashed,
    },
  })

  return user
}
