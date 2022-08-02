import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';

export default function App() {
  return (

    
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Suggestions, Comments, Concerns?</h5>

            <p>
              We are all ears here at Cracking the Code! Feel free to give us a call to let us know if you have any feedback on gameplay. We are always looking to boost the experience, and wouldn't be able to do so without incorporating feedback from our users!
            </p>
          </MDBCol>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>From our Lawyers</h5>

            <p>
              This game is not meant to be fun. All fun had as a result of this game is at the risk of the participant. The partcipant releases JeremyKurtSamZev LLC from any and all liability that comes from spontaneous feelings of joy and happiness that may be had.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          JeremyKurtSamZev LLC.
        </a>
      </div>
    </MDBFooter>
  );
}