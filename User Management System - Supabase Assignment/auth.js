


let signupEmail = document.getElementById('signup_email')
let signupPass = document.getElementById('signup_password')
let signupBtn = document.getElementById('signup-btn')
let signupBtnLoader = document.getElementById('loading_btn_spinner')
let loginBtn = document.getElementById('login_btn')
let loginEmail = document.getElementById('login_email')
let loginPass = document.getElementById('login_password')
let logout_btn = document.getElementById('logout_btn')
let session_btn = document.getElementById('session_btn')

let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let company = document.getElementById('company');
let address = document.getElementById('address');
let user_table_body = document.getElementById('user_table_body');
let adduserbtn = document.getElementById('add-user-btn');



async function signup() {
  try {
    // signupBtnLoader.style.display = 'block';
    const { data, error } = await supabase.auth.signUp({
      email: signupEmail.value,
      password: signupPass.value,
    });

    if (error) throw error;
    if (data) {
      alert('Please check your email for confirmation');
      
      window.location.href = '/login.html';
    }
    return data;
  } catch (error) {
    console.log(error);
    alert(error.message);
  } finally {
    signupBtnLoader.style.display = 'none';
  }
}

async function login() {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginEmail.value,
      password: loginPass.value,
      
    });
   

    if (error) throw error;
    if (data) {
      window.location.href = '/dash.html';
    }
    return data;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}



async function logout() {
  try {
      const { error } = await supabase.auth.signOut(); 
      if (error) throw error;

      console.log("Logged out successfully");
      window.location.href = '/login.html';
  } catch (error) {
      console.log(error);
      // alert(error.message)
  }
}



async function session() {
try {
  const { data, error } = await supabase.auth.getSession()
  if(error)throw error;
  if(data){
    console.log(data);
    const {session} = data;    
    console.log(session);
    
  }
} catch (error) {
  alert(error.message)
}

}

// dynamic content in table 
function contentbody() {
  let rowData = `
    <tr>
        <th scope="col">${firstName.value}</th>
        <th scope="col">${lastName.value}</th>
        <th scope="col">${company.value}</th>
        <th scope="col">${address.value}</th>
    </tr>
  `;

  user_table_body.innerHTML += rowData;

  // Save data in localStorage
  localStorage.setItem("tableData", user_table_body.innerHTML);

  // Clear input fields
  firstName.value = '';
  lastName.value = '';
  company.value = '';
  address.value = '';
}

// Load saved data on page load
window.onload = function () {
  if (localStorage.getItem("tableData")) {
    user_table_body.innerHTML = localStorage.getItem("tableData");
  }
};



if (adduserbtn) {
  adduserbtn.addEventListener('click', contentbody);
}





if (session_btn) {
  session_btn.addEventListener('click' , session)
}











if (logout_btn) {
  logout_btn.addEventListener('click', logout);
}



if(loginBtn) {
  loginBtn.addEventListener('click' , login)

}

if (signupBtn) {
  signupBtn.addEventListener('click', signup);
}