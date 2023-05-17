import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.css";

function Login() {
  return (
    <div className={styles.login_outer}>
      <div className={`container ${styles.container} ${styles.login_container}`}>
        <div className={styles.login_inner}>
          <div className={styles.login_box}>
            <div className={styles.login_formbox}>
              <h1>Login</h1>
              <h3>
                Doesn't have an account yet?
                <Link to="/#">Sign Up</Link>
              </h3>
              <label for="email">Email Address</label>
              <input id="email" className={styles.type} type="text" placeholder="you@example.com" />
              <div className={styles.secont_label}>
                <label for="password">Password</label>
                <Link to="/#">Forgot Password?</Link>
              </div>
              <input id="password" className={styles.type} type="password" placeholder="Enter 6 character or more" />
              <div className={styles.checkbox}>
                <input id="checkbox" type="checkbox" />
                <label for="checkbox">Remember me</label>
              </div>
              <input type="submit" value="LOGIN" className={styles.submit} />
              <div className={styles.or_sep}>
                <div className={styles.line}></div>
                <div className={styles.text}>or login with</div>
              </div>
              <div className={styles.social_buttons}>
                <button className={styles.google}>
                  <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-16.png" />
                  <span>Google</span>
                </button>
                <button className={styles.fb}>
                  <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook2_colored_svg-16.png" />
                  <span>Facebook</span>
                </button>
              </div>
            </div>
            <img src="/img/table.png" alt="Right IMG" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
