// src/pages/index.tsx

import { FormEvent, useEffect, useState } from "react"
import { remult } from "remult"
import { Task } from "../shared/Task"
import About from "./about"

export default function Home() {
  return (
    <div>
      <About />
    </div>
  )
}