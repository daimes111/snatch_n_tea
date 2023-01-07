import styles from "./ProfilePage.module.scss"

export default function ProfilePage() {
    return (
        <div className={styles.ProfilePage}>
          <h2>ProfilePage</h2>
          <div className='form-container'>
            {/* <form autoComplete='off' onSubmit={this.handleSubmit}>
              <label>Name</label>
              <input type='text' name='name' value={this.state.name} onChange={this.handleChange} required />
              <label>Email</label>
              <input type='email' name='email' value={this.state.email} onChange={this.handleChange} required />
              <label>DOB</label>
              <input type='date' name='dob' value={this.state.password} onChange={this.handleChange} required />
              <label>interests</label>
              <input type='text' name='interest' value={this.state.confirm} onChange={this.handleChange} required />
              <label>Username</label>
              <input type='text' name='Username' value={this.state.confirm} onChange={this.handleChange} required />
              <button type='submit' disabled={disable}>SIGN UP</button>
            </form> */}
          </div>
          {/* <h1 className='error-message'>&nbsp;{this.state.error}</h1> */}
        </div>
      )
}