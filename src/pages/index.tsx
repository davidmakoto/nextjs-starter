// src/pages/index.tsx

import { FormEvent, useEffect, useState } from "react"
import { remult } from "remult"
import { Task } from "../shared/Task"
import Tasks from "./Tasks"
import Services from "./Services/Services"

export default function Home() {
  return (
    <div>
      <Tasks />
      <Services />
    </div>
  )
}