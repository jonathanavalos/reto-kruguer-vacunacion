import React from 'react';
import { Empleado } from '../empleado/Empleado';
import { Administrador } from '../administrador/Administrador';


export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            <main>
                <Administrador /> 
                {/*<Empleado /> */}
            </main>
        </div>
    )
}
