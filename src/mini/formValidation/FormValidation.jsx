import './formValidation.css';

const FormValidation = () => {
  return (
    <form action="" method='post'>
        <label htmlFor="name">Name:</label>
        <input type="text" id='name' placeholder='Enter name' name='name'/>
        <label htmlFor="email">Email:</label>
        <input type="email" id='email' placeholder='Enter email' name='email'/>
        <label htmlFor="password">Enter Password:</label>
        <input type="password" name="password" id="password" />
        <label htmlFor="password2">Confirm Password:</label>
        <input type="password" name="password2" id="password2" />
        <input type="submit" value='Submit' />
    </form>
  )
}

export default FormValidation
