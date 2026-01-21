import bg from "../assets/login-bg.jpg";
import petCare from "../assets/pet-care-rafiki.svg";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem");
      return;
    }

    console.log({
      name,
      email,
      password,
      gender,
    });

    localStorage.setItem("user", JSON.stringify(user));

    alert("Cadastro realizado com sucesso!");
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="
    w-full
    min-h-[500px]
    max-w-sm
    md:max-w-2xl
    lg:max-w-6xl
    mx-auto
    flex
    flex-col
    lg:flex-row
    items-center
    justify-center
    gap-6
    lg:gap-10
    bg-gray-50
    rounded
    p-6
  "
      >
        <div className="flex text-left ">
          <div className="w-full lg:w-130  md:pt-2 lg:p-10 text-center md:text-center lg:text-left">
            <h2 className="text-3xl md:text-2xl sm:text-2xl font-bold md:mt-0 lg:mt-0">
              Vamos começar!
            </h2>

            <p className="font-semibold md:text-sm sm:text-sm text-gray-500/60">
              Complete o cadastro para iniciar o agendamento.
            </p>
            <img src={petCare} className="h-90 hidden lg:block" />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="
    w-full
    bg-white
     md:max-w-xl
    flex
    flex-col
    items-center
    justify-center
    rounded-md
    drop-shadow-xl
    p-6
    gap-4
  "
        >
          <div
            className="
  w-full
  sm:w-full
  md:w-[420px]
  flex
  flex-col
"
          >
            <label className="font-semibold text-gray-800">Nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-gray-100 h-10 sm:h-8 w-full rounded px-3"
            />
          </div>

          <div
            className="
  w-full
  md:w-[420px]
  flex
  flex-col
"
          >
            <p className="font-semibold text-gray-800 text-center md:text-left">
              Sexo
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-1">
              <label className="flex items-center gap-1.5">
                <input
                  type="radio"
                  name="gender"
                  value="feminino"
                  checked={gender === "feminino"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Feminino
              </label>

              <label className="flex items-center gap-1.5">
                <input
                  type="radio"
                  name="gender"
                  value="masculino"
                  checked={gender === "masculino"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Masculino
              </label>

              <label className="flex items-center gap-1.5">
                <input
                  type="radio"
                  name="gender"
                  value="nao-informar"
                  checked={gender === "nao-informar"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Prefiro não informar
              </label>
            </div>
          </div>

          <div
            className="
  w-full
  md:w-[420px]
  flex
  flex-col
"
          >
            <label className="font-semibold text-gray-800">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-100 h-10 sm:h-8 w-full rounded px-3"
            />
          </div>

          <div
            className="
  w-full
  md:w-[420px]
  flex
  flex-col
"
          >
            <label className="font-semibold text-gray-800">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-gray-100 h-10 sm:h-8 w-full rounded px-3"
            />
          </div>

          <div
            className="
  w-full
  md:w-[420px]
  flex
  flex-col
"
          >
            <label className="font-semibold text-gray-800">
              Confirmar senha
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-gray-100 h-10 sm:h-8 w-full rounded px-3"
            />
          </div>

          <div
            className="
  w-full
  md:w-[420px]
  flex
  flex-col
  items-center
  gap-2
"
          >
            <button
              type="submit"
              className="
      w-full
      bg-pink-900
      text-white
      py-2
      rounded
      font-medium
      hover:bg-pink-950
      transition hover:cursor-pointer
    "
            >
              Criar conta
            </button>

            <p className="text-xs font-medium text-center">
              Já tem conta?{" "}
              <span className="hover:cursor-pointer text-pink-900">
                Clique aqui
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
