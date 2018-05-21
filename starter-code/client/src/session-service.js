const urlApi = "http://localhost:3000/api/";


export function signup(userData) {
  return fetch(urlApi + 'signup', {
    method: 'post',
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(userData)
  })
  .then(res=>{
    if(!res.ok) return Promise.reject(res);
      return res.json();
  })
  .then(user=>{
    return user;
  })
}

export function login(userData){
  return fetch(urlApi + 'login', {
      method:'post',
      headers:{
          "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
  })
  .then(res=>{
      if(!res.ok) return Promise.reject(res);
      return res.json();
  })
  .then(user=>{
      //localStorage.setItem('user', JSON.stringify(user))
      return user;
  });
}

export function getUserById(id){
  return fetch(urlApi + id)
  .then(r=>{
    if(!r.ok) return Promise.reject(r.statusText);
    return r.json();
  })
  .then(users=>{
    return users
  });
}