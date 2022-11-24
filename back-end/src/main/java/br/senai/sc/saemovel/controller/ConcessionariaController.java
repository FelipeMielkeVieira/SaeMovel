package br.senai.sc.saemovel.controller;

import br.senai.sc.saemovel.model.entities.Alocacao;
import br.senai.sc.saemovel.model.entities.Automovel;
import br.senai.sc.saemovel.model.entities.Concessionaria;
import br.senai.sc.saemovel.model.service.AlocacaoService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;

@Controller
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/saemovel/concessionaria")
public class ConcessionariaController {

    private AlocacaoService alocacaoService;

    @GetMapping
    public ResponseEntity<List<Concessionaria>> findByAreaAndAutomovel(
            @RequestParam Integer area, @RequestParam Automovel automovel
    ) {
        List<Alocacao> alocacoes = alocacaoService.findByAreaAndAutomovel(area, automovel);
        List<Concessionaria> concessionarias = new ArrayList<>();
        for (Alocacao alocacao : alocacoes) {
            concessionarias.add(alocacao.getConcessionaria());
        }
        return ResponseEntity.status(HttpStatus.OK).body(concessionarias);
    }
}
