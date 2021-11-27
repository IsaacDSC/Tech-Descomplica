import React from 'react'
import { Card } from './student.style'

export const Students = () => {
    return (
        <Card>
           
            <section>
                
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card" >
                                {/* <img src="..." className="card-img-top" alt="..."> */}
                                <div className="card-body">
                                    <div className="container">
                                        <hr />
                                        <h5 className="card-title">Nome do aluno</h5>
                                        <h5 className="card-text">Email</h5>
                                        <h5>CPF</h5>
                                    </div> 
                                    <hr />                                  
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" >
                                {/* <img src="..." className="card-img-top" alt="..."> */}
                                <div className="card-body">
                                    <div className="container">
                                        <hr />
                                        <h5 className="card-title">Nome do aluno</h5>
                                        <h5 className="card-text">Email</h5>
                                        <h5>CPF</h5>
                                    </div>
                                    <hr />                                    
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" >
                                {/* <img src="..." className="card-img-top" alt="..."> */}
                                <div className="card-body">
                                    <div className="container">
                                        <hr />
                                        <h5 className="card-title">Nome do aluno</h5>
                                        <h5 className="card-text">Email</h5>
                                        <h5>CPF</h5>
                                    </div>
                                    <hr />                                    
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" >
                                {/* <img src="..." className="card-img-top" alt="..."> */}
                                <div className="card-body">
                                    <div className="container">
                                        <hr />
                                        <h5 className="card-title">Nome do aluno</h5>
                                        <h5 className="card-text">Email</h5>
                                        <h5>CPF</h5>
                                    </div>
                                    <hr />                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Card>
    )
}