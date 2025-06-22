import React from 'react';

function Table(props) {
    return (
        <>
            <table border={2}  onClick={()=> console.log('table')}>
                <tbody onClick={() => console.log('tbody')}>
                    {/*{props.children.map((child, index) => (*/}
                        <tr key={1} onClick={() => console.log('tr')}>
                            <td onClick={(event)=> {
                                event.stopPropagation();
                                console.log('td');
                            }}>MIKE</td>
                        </tr>
                    {/*))}*/}
                </tbody>
            </table>
        </>
    );
}

export default Table;