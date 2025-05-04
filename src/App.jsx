import { useMemo, useRef, useState } from 'react'
const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/°`~£§";

function App() {
  //! Campi controllati
  const [username, setUsername] = useState("pheb731");
  const [password, setPassword] = useState("password3$");
  const [desc, setDesc] = useState("Ciao, sono Fabio e vivo in via tal de tali. Mi piace molto programmare e produrre musica. Grazie per l'attenzione");
  //! Campi non controllati
  const fullNameRef = useRef();
  const yearExpRef = useRef();
  const specializationRef = useRef();
  
  console.log("Render");

  //! Validazione username
  const isUsernameValid = useMemo(() => {
    const charsValid = username.split("").every(char =>
      letters.includes(char.toLowerCase()) || numbers.includes(char)
    );
    return charsValid && username.trim().length >= 6;
  }, [username]);

  //! Validazione password
  const isPasswordValid = useMemo(() => {
    return (
      password.trim().length >= 8 &&
      symbols.split("").some(char => password.includes(char)) &&
      letters.split("").some(char => password.includes(char)) &&
      numbers.split("").some(char => password.includes(char))
    )
  }, [password]);

  //! Validazione Descrizione
  const isDescValid = useMemo(() => {
    return (
      desc.trim().length >= 100 &&
      desc.trim().length < 1000
    )
  }, [desc])

  //! Funzione Submit
  const submit = (e) => {
    e.preventDefault();
    const fullNameInput = fullNameRef.current.value;
    const yearExpInput = yearExpRef.current.value;
    const specializationInput = specializationRef.current.value;

    if (
      !fullNameInput.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specializationInput.trim() ||
      !yearExpInput.trim() ||
      !desc.trim() ||
      !isUsernameValid ||
      !isDescValid ||
      !isPasswordValid
    ) {
      alert("Errore: Compila tutti i campi");
      return;
    } else {
      console.log(`Hai fatto il submit con:
      - Nome completo: ${fullNameInput};
      - Username: ${username};
      - Password: ${password};
      - Specializzazione: ${specializationInput};
      - Anni di esperienza: ${yearExpInput};
      - Descrizione: ${desc}`);
    }
  }

  return (
    <div className='flex justify-center min-h-screen items-center'>
      <form onSubmit={submit} className='grid border border-black p-5 w-min'>
        {/* Nome Completo */}
        <section>
          <h1 className='text-center'>Nome completo</h1>
          <input type="text"
            ref={fullNameRef}
            placeholder='Scrivi...'
            className='p-2 border m-1'
          />
          {/* Username */}
        </section>
        <section>
          <h1 className='text-center'>Username</h1>
          <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Scrivi...'
            className='p-2 border m-1'
          />
          {/* Validazione username */}
          {username.trim() && (
            <p style={{ color: isUsernameValid ? "green" : "red" }} className='block text-center text-[12px]'>
              {isUsernameValid ? "Username valido" : "Almeno 6 caratteri alfanumerici"}
            </p>
          )}
        </section>
        {/* Password */}
        <section>
          <h1 className='text-center'>Password</h1>
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Scrivi...'
            className='p-2 border m-1'
          />
          {/* Validazione Password */}
          {password.trim() && (
            <p style={{ color: isPasswordValid ? "green" : "red" }} className='block text-center text-[12px]'>
              {isPasswordValid ? "Password valida" : "Minimo 8 caratteri e inserire almeno un numero, un simbolo e una lettera"}
            </p>
          )}
        </section>
        {/* Specializzazione */}
        <section>
          <h1 className='text-center'>Specializzazione</h1>
          <select
            ref={specializationRef}
            className='p-2 border m-1'>
              <option value="">Seleziona...</option>
            <option value="Full-stack">Full-stack</option>
            <option value="Front-end">Front-end</option>
            <option value="Back-end">Back-end</option>
          </select>
        </section>
        {/* Anni di esperienza */}
        <section>
          <h1 className='text-center'>Anni di esperienza</h1>
          <input type="number"
            ref={yearExpRef}
            placeholder='Scrivi...'
            className='p-2 border m-1'
            min="0"
          />
        </section>
        {/* Descrizione Sviluppatore */}
        <section>
          <h1 className='text-center'>Descrizione sviluppatore</h1>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className='p-2 border m-1 h-[140px]'
            placeholder='Scrivi...'>
          </textarea>
          {/* Validazione descrizione */}
          {desc.trim() && (
            <p style={{ color: isDescValid ? "green" : "red" }} className='block text-center text-[12px]'>
              {isDescValid ? "Descrizione valida" : `Deve avere tra 100 e 1000 caratteri (${desc.trim().length})`}
            </p>
          )}
        </section>
        {/* Bottone Invia */}
        <button type='submit'
          className='border-2 p-2 m-2 bg-blue-600 hover:bg-blue-700 text-white border-black'>
          Invia
        </button>
      </form>
    </div>
  )
}

export default App        