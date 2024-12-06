'use server'

import { signIn } from "@/app/lib/auth"

export async function signInWithGoogle() {
  await signIn("google")
}

export async function signInWithGithub() {
  await signIn("github")
}

