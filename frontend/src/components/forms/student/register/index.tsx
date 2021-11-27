import { gql, useQuery } from '@apollo/client'
import { apolloClient } from '../../../../config/graphQl'

const Student = async (event: any) => {
  event.preventDefault();
  const { data } = await apolloClient.mutate({
      mutation: gql`
      mutation Mutation($data: StudentRegister!) {
      createStudent(data: {
        nome:event.target.name.value,
        CPF: event.target.CPF.value,
        email: event.target.email.value
      }) {
        id
        nome   
      }
    }
    `
  })
  console.log(data)
}

export const FormRegisterUser = () => {
  return (
    <section>
      <div id="data"></div>
      <form method="post" onSubmit={Student}>
        <div className="modal-body">
          <div className="container">
            <input type="text" name="name" className="form-control mt-1 mb-1" placeholder="Nome do Estudante" />
            <input type="email" name="email" className="form-control mt-1 mb-1" placeholder="Email do Estudante" />
            <input type="text" name="CPF" className="form-control mt-1 mb-1" placeholder="CPF do Estudante" />
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary">Cancelar</button>
          <button type="submit" className="btn btn-danger">Salvar</button>
        </div>
      </form>
    </section>
  )
}


