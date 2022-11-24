package br.senai.sc.saemovel.controller;

import br.senai.sc.saemovel.model.entities.Alocacao;
import br.senai.sc.saemovel.model.service.AlocacaoService;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@Controller
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/saemovel/alocacao")
public class AlocacaoController {

    private AlocacaoService alocacaoService;

    @GetMapping("/{area}")
    public ResponseEntity<Boolean> findDisposicao(@PathVariable(name = "area") Integer area) {
        List<Alocacao> alocacoes = alocacaoService.findByAreaAndQuantidadeIsNot(area, 0);
        if (alocacoes.size() < 1) {
            return ResponseEntity.status(HttpStatus.OK).body(false);
        } else {
            return ResponseEntity.status(HttpStatus.OK).body(true);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateAlocacao(@PathVariable(name = "id") Long id,
                                                  @RequestBody Alocacao alocacao) {
        Alocacao alocacaoSalva = alocacaoService.findById(id).get();
        BeanUtils.copyProperties(alocacao, alocacaoSalva);
        alocacaoSalva.setId(id);
        return ResponseEntity.status(HttpStatus.OK).body(alocacaoService.save(alocacaoSalva));
    }
}
