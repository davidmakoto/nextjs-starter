// src/pages/index.tsx

import { FormEvent, useEffect, useState } from "react"
import { remult } from "remult"
import { Task } from "../shared/Task"
import Tasks from "./Tasks"

export default function Home() {
  return (
    <div>
      <Tasks />
    </div>
  )
}