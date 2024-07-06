import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './partner.css';
import { Link } from 'react-router-dom';
import submit from './submit';
function Contact() {
  return (
    <div className='partner-main'>
     
      <div className='partner-text-1'>Let’s Talk, ask us anything or just say hi</div>
      <div className='picpartner'><img src="Art.png" alt="" /></div>
      <div className='partnermain1'>
      <div className='headerpartner'>
        <div className='logopartner'> </div>
        <div className='Navbar-1'>

          <div className="MenuNavigation-Item-1">Products</div>
          <div className="MenuNavigation-Item-1">Working</div>
          <div className="MenuNavigation-Item-1">Features</div>
          <div className="MenuNavigation-Item-1">Partners</div>
          <div className="MenuNavigation-Item-1">Stories</div>
          <div className="MenuNavigation-Item-1">Partner</div>
          <div className="MenuNavigation-Item-1">Contact</div>
          <div className="MenuNavigation-Item-1"> العربية</div>

        </div>
      </div>
        <div className='partnerheadings'>
          <div className='partnertext-1'>Contact Us</div>
          <div className='partnertext-2'>
          If you have any inquiries or wish to get in touch with us, please fill out the form below, and we will respond to you as soon as possible.
          </div>
        </div>
        <div className='form'>
          <div className='form-feilds'>
            <div className='row-1'>
              <div className='input-field'>
                <div className='field'>
                  <div className='text-form'>
                    <div className='field-title'>
                      <div className='fieldtitle '>Full Name  </div>
                    </div>
                    <div className='field-input'> <input type="text" placeholder='Hamza Co.' name="" id="" /></div>
                  </div>
                  <AiOutlineClose className='clear icon-input' />
                </div>
              </div>
              <div className='input-field'>
                <div className='field'>
                  <div className='text-form'>
                    <div className='field-title'>
                      <div className='fieldtitle'>Subject</div>
                     
                    </div>
                    <div className='field-input'> <input type="text" placeholder='Choose' name="" id="" /></div>
                  </div>
                  <AiOutlineClose className='clear icon-input' />
                </div>
              </div>

            </div>
            <div className='row-1'>
              <div className='input-field'>
                <div className='field'>
                  <div className='text-form'>
                    <div className='field-title'>
                      <div className='fieldtitle '> Email  </div>
                      <div className='steric'>*</div>
                    </div>
                    <div className='field-input'> <input type="text" placeholder='Design services' name="" id="" /></div>
                  </div>
                  <AiOutlineClose className='clear icon-input' />
                </div>
              </div>
              <div className='input-field'>
                <div className='field'>
                  <div className='text-form'>
                    <div className='field-title'>
                      <div className='fieldtitle'>Phone Number </div>
                     
                    </div>
                    <div className='field-input'> <input type="text" placeholder='Design Services' name="" id="" /></div>
                  </div>
                  <AiOutlineClose className='clear icon-input' />
                </div>
              </div>

            </div>
           
            <div className='textarea-1'>
              <div className='textarea-div mt-2'>
                <div className='textarea-text'>
                  <div className='text-form'>
                    <div className='field-title'>
                      <div className='fieldtitle'>Message</div>

                    </div>
                    <div className='field-input'> <input type="text" placeholder='Type Here' name="" id="" /></div>
                  </div>
                </div>
              </div>

            </div>

          </div>
         
      <div className='partnerbtn'>
        <div className='textpartner' style={{paddingLeft:'35px'}}>Send</div>
      </div>
    
        </div>
      </div>
    </div>
  );
}

export default Contact;
