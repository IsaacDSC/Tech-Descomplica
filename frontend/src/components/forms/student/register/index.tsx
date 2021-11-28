import { gql, useQuery, useMutation } from '@apollo/client'
import { apolloClient } from '../../../../config/graphQl'

const Student = async (event: any) => {

  event.preventDefault();
  const createNewStudent = gql`
    mutation Mutation($data: StudentRegister!) {
      createStudent(data: {
        nome:"Isaac",
        CPF: "17856362782",
        email: "isaac8.silva@hotail.com"
      }) {
        id
        nome   
      }
   }
  `
  const [addTodo, { data, loading, error }] = useMutation(createNewStudent, {client: apolloClient})
  console.log(addTodo)

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


