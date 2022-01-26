import React from 'react'
import { Container } from 'react-bootstrap'
import Pdf from '../assets/doc/LitePaper.pdf';

const Litepaper = () => {
    return (
        <Container>
            <div className='litepaper'>
                <iframe
                    src={Pdf}
                    type='application/pdf'
                    title='LitePaper'
                />
            </div>
        </Container>
    )
}

export default Litepaper
