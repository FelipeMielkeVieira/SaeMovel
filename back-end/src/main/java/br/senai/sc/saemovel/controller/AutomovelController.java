package br.senai.sc.saemovel.controller;

import br.senai.sc.saemovel.model.entities.Alocacao;
import br.senai.sc.saemovel.model.entities.Automovel;
import br.senai.sc.saemovel.model.service.AlocacaoService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/saemovel/automovel")
public class AutomovelController {

    private AlocacaoService alocacaoService;

    @GetMapping("/{area}")
    public ResponseEntity<List<Automovel>> findByArea(@PathVariable(name = "area") Integer area) {
        List<Alocacao> alocacoes = alocacaoService.findByArea(area);
        List<Automovel> automoveis = new ArrayList<>();
        for (Alocacao alocacao : alocacoes) {
            if (!automoveis.contains(alocacao.getAutomovel())) {
                automoveis.add(alocacao.getAutomovel());
            }
        }
        return ResponseEntity.status(HttpStatus.OK).body(automoveis);
    }
}
