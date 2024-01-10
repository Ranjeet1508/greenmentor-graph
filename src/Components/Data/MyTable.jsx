import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Collapse,
} from '@chakra-ui/react'
import { Mydata } from './Mydata';
import { color } from 'framer-motion';

const MyTable = () => {
    const dataOf2023 = Mydata.filter(item => item.Year===2023);
    console.log(dataOf2023)
    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead bg={"gray.100"}>
                    <Tr>
                        <Th>MONTH</Th>
                        <Th>EMISSION CO2E</Th>
                        <Th>REVENUE/EMISSION RATIO</Th>
                        <Th>YOY R/E CHANGE</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {dataOf2023.map((elem, idx) => {
                        return <Tr key={idx}>
                        <Td>{elem.Month}</Td>
                        <Td isNumeric>{elem.Emissions}</Td>
                        <Td isNumeric>{elem.R_E}</Td>
                        <Td isNumeric style={Number(elem['YOY R_E Change']<=0) ? {color: 'red'} : {color: 'green'}}>{elem['YOY R_E Change']}% {elem['YOY R_E Change'] <=0 ?  '↑' : '↓' }</Td>
                        </Tr>
                    })}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default MyTable
