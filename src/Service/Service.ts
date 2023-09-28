import { useEffect } from "react"
import { EState } from "../enums/event-state.enum"

export class Service {
  private events : Map<EState, Function | undefined>

  constructor() {
    this.events = new Map()
  }


  on(event : EState, setState : Function) {
    return {
      effect : () => {
        useEffect(() => {

          console.log("Event On", event)
          this.events.set(event, () => {
            setState((value : boolean) => !value)
          })

          return (() => {
            console.log("Event Off", event)
            this.off(event)
          })
        }, [])
      }
    }
  }

  off(event : EState) {
    this.events.delete(event)
  }

  emit(event : EState) {
    this.events.get(event)?.()
  }

}
