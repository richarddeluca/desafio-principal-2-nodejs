import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { name, email } = request.body

      const user = this.createUserUseCase.execute({ name, email })
      const { admin } = user
      return response.status(201).json({ name, email, admin })

    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
  }
}

export { CreateUserController };
