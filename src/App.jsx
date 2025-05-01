import { useState } from 'react'

function App() {

  const [completeName, setCompleteName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [yearExp, setYearExp] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(`Hai fatto il submit con:
      - Nome completo: ${completeName};
      - Username: ${username};
      - Password: ${password};
      - Specializzazione: ${specialization};
      - Anni di esperienza: ${yearExp};
      - Descrizione: ${desc}`);
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <form onSubmit={submit} className='grid grid-cols-3 border border-black p-5'>
        <section>
          <h1 className='text-center'>Nome completo</h1>
          <input type="text"
            value={completeName}
            onChange={(e) => setCompleteName(e.target.value)}
            placeholder='Scrivi...'
            className='p-2 border m-2'
          />
        </section>
        <section>
          <h1 className='text-center'>Username</h1>
          <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Scrivi...'
            className='p-2 border m-2'
          />
        </section>
        <section>
          <h1 className='text-center'>Password</h1>
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Scrivi...'
            className='p-2 border m-2'
          />
        </section>
        <section>
          <h1 className='text-center'>Specializzazione</h1>
          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className='p-2 border m-2'>
            <option value="Full-stack">Full-stack</option>
            <option value="Front-end">Front-end</option>
            <option value="Back-end">Back-end</option>
          </select>
        </section>
        <section>
          <h1 className='text-center'>Anni di esperienza</h1>
          <input type="number"
            value={yearExp}
            onChange={(e) => setYearExp(e.target.value)}
            placeholder='Scrivi...'
            className='p-2 border m-2'
          />
        </section>
        <section>
          <h1>Descrizione sviluppatore</h1>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className='p-2 border m-2'
            placeholder='Scrivi...'>
          </textarea>
        </section>
        <button type='submit' className='border-2 p-2 m-2 bg-blue-600 hover:bg-blue-700 text-white border-black'>Invia</button>
      </form>
    </div>
  )
}

export default App
