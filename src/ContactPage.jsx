import React from 'react'
import Navbar from './Navbar'
import Contact from './component/Contact'
import styled from 'styled-components'

const Wrapper = styled.div`
display:flex;
gap:30px;
flex-direction:column;
`
function ContactPage() {
  return (
<Wrapper>
<Navbar />
<Contact />
</Wrapper>
  )
}

export default ContactPage