import bg from "../assets/login-bg.jpg";
import petCare from "../assets/pet-care-rafiki.svg";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    // localStorage.setItem("user", JSON.stringify(user));

    alert("Login realizado com sucesso!");
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="h-160 w-300 items-center justify-center flex flex-row gap-10 bg-gray-50">
        <div className="flex text-left ">
          <div className="h-120 w-130 p-10">
            <h2 className="text-3xl font-bold mb-2">Vamos começar!</h2>
            <p className="font-semibold text-gray-500/60">
              Complete o cadastro para iniciar o agendamento.
            </p>
            <img src={petCare} className="h-90 " />
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="h-140 w-130 bg-white flex flex-col items-center justify-center rounded-[5px] drop-shadow-xl"
        >
          <div className="mt-4 flex flex-col">
            <label className="font-semibold text-gray-800 ">Nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-gray-100 h-8 w-109 rounded p-2"
            />
          </div>

          <div className="flex gap-2 m-5">
            <p className="font-semibold text-gray-800">Sexo</p>

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

          <div className="flex flex-col">
            <label className="font-semibold text-gray-800 ">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-100 h-8 w-109 rounded p-2"
              required
            />
          </div>
          <div className="m-5 flex flex-col">
            <label className="font-semibold text-gray-800">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-gray-100 h-8 w-109 rounded p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-800">
              Confirmar senha
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-gray-100 h-8 w-109 rounded mb-4 p-2"
            />
          </div>
          <div>
            <button
              type="submit"
              className="mt-3.5 mb-2 bg-pink-900 text-white py-2 rounded font-medium hover:bg-pink-950 hover:cursor-pointer w-109 transition"
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
