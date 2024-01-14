import React from 'react'
import styles from './compstyles/form.module.css'

const ExampleComponentForYou = () => {
  return (
    <div className={styles.container}>
          <div className={styles.topcontainer}>
            <div className={styles.headingcontainer}> 
              <p className={styles.firstpara}>Event registration form<br/>
               <h className={styles.secondpara}>(free for university students)</h></p>
            </div>
              <p className={styles.thirdpara}>Robotic</p>
              <div className={styles.fourthpara}>
                  <p>.</p>
                <div>
                   <p className={styles.para1}> Year</p><input className={styles.inputbox} type="tel" name="useryear" autofocus></input>
                </div>
                <div className={styles.inputboxcontainergender}>
                  <p className={styles.paragender}> Gender</p>
                 <p className={styles.radiobox}> male<input  type="radio" name="gender"/> female <input  type="radio" name="gender"/></p>
                </div>
                <div className={styles.inputboxcontainer}>
                  <p className={styles.para2}>Mobile No.</p><input className={styles.inputbox} type="tel" name="usermobile no."/>
                </div>
                <div className={styles.inputboxcontainer2}>
                 <img src =""className={styles.inputbox3} />
                </div>
                <div className={styles.inputboxcontainer3}>
                  <p className={styles.para4}>Payment reciept </p><input  className={styles.inputbox} type="file" name="filenmae"/>
                </div>
                <div>
                  <button className={styles.button}>DONE</button>
                </div>
              </div>
          </div>  
        </div>
  )
}

export default ExampleComponentForYou