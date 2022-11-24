package br.senai.sc.saemovel.repository;

import br.senai.sc.saemovel.model.entities.Alocacao;
import br.senai.sc.saemovel.model.entities.Automovel;
import br.senai.sc.saemovel.model.entities.Concessionaria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AlocacaoRepository extends JpaRepository<Alocacao, Long> {

    List<Alocacao> findByArea(Integer area);

    List<Alocacao> findByAreaAndAutomovel(Integer area, Automovel automovel);

    List<Alocacao> findByAreaAndQuantidadeIsNot(Integer area, int i);

    Object findByAreaAndConcessionariaAndAutomovel(Integer area, Concessionaria concessionaria, Automovel automovel);
}
