const InlineStyleExample = () => {
   const headingStyle = {
    color:'#2c3e50',
    fontSize:'2rem',
    textAlign:'center',
    padding:'20px'
  };

  return (
  <>
  <h1 style={headingStyle}>Styled Heading</h1>;
  <p style={{ color:'red', fontWeight:'bold' }}>Warning text</p>
  </>
  )
}

export default InlineStyleExample