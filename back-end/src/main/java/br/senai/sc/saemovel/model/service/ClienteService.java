package br.senai.sc.saemovel.model.service;

import br.senai.sc.saemovel.model.entities.Cliente;
import br.senai.sc.saemovel.repository.ClienteRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ClienteService {

    private ClienteRepository clienteRepository;

    public List<Cliente> findAll() {
        return clienteRepository.findAll();
    }
}
