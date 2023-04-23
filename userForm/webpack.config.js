import { resolve } from 'path'

export const mode = 'development'
export const entry = './dist/user.js'
export const output = {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js'
}
export const watch = true