package br.com.criandoapi.Projeto.DAO;

import org.springframework.data.repository.CrudRepository;

import br.com.criandoapi.Projeto.modal.Usuario;

public interface IUsuario extends CrudRepository<Usuario, Integer> {

}
