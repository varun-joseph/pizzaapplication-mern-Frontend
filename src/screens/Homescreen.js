import React, { useEffect } from 'react'
import Pizza from '../components/Pizza'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'
import Loading from '../components/Loading'
import Error from '../components/Error'
import Filter from '../components/Filter'

export default function Homescreen() {

    const dispatch = useDispatch()
    const pizzasState = useSelector(state => state.getAllPizzasReducer)
    const { pizzas, error, loading } = pizzasState

    useEffect(() => {
        dispatch(getAllPizzas())
    }, []);

    return (
        <div>
            <Filter/>
            <div className="row justify-content-center">
                {loading
                    ? <Loading/>
                    : error ? <Error error='Something went wrong'/>
                        : pizzas.map(pizza => {
                            return <div key={pizza._id} className="col-md-3 m-3">
                                <div>
                                    <Pizza pizza={pizza} />
                                </div>
                            </div>
                        })
                }
            </div>
        </div>
    )
}