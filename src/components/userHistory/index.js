import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { useDream } from "../../hooks/dream";
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import {
    MainDiv
} from './style'


const UserHistory = () => {

    const { user } = useAuth();
    const { historyUserTransations } = useDream();
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const pickData = async () => {
            const data = await historyUserTransations(user.id);
            setHistory(data)
        }
        pickData()
    },[historyUserTransations, user.id])


    return (
        <>
            <MainDiv>
                {history.map((item, index) => {
                    return (
                        <div key={index}>
                            <p> ID: {item.id}</p>
                            <p> Valor da doação: {item.value} </p>
                            <p> Doação feita em {format(new Date(item.createdAt), 'PPpp', { locale: pt })} </p>
                        </div>
                    )
                })
                }
            </MainDiv>
        </>
    )
}

export default UserHistory;
