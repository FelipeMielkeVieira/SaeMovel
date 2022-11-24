package br.senai.sc.saemovel.model.service;

import br.senai.sc.saemovel.model.entities.Alocacao;
import br.senai.sc.saemovel.model.entities.Automovel;
import br.senai.sc.saemovel.model.entities.Concessionaria;
import br.senai.sc.saemovel.repository.AlocacaoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AlocacaoService {

    private AlocacaoRepository alocacaoRepository;

    public List<Alocacao> findByArea(Integer area) {
        return alocacaoRepository.findByArea(area);
    }

    public List<Alocacao> findByAreaAndAutomovel(Integer area, Automovel automovel) {
        return alocacaoRepository.findByAreaAndAutomovel(area, automovel);
    }

    public List<Alocacao> findByAreaAndQuantidadeIsNot(Integer area, int i) {
        return alocacaoRepository.findByAreaAndQuantidadeIsNot(area, i);
    }

    public Optional<Alocacao> findById(Long id) {
        return alocacaoRepository.findById(id);
    }

    public Object save(Alocacao alocacaoSalva) {
        return alocacaoRepository.save(alocacaoSalva);
    }

    public Object findByAreaAndConcessionariaAndAutomovel(Integer area, Concessionaria concessionaria, Automovel automovel) {
        return alocacaoRepository.findByAreaAndConcessionariaAndAutomovel(area, concessionaria, automovel);
    }
}
