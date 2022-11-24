package br.senai.sc.saemovel.controller;

import br.senai.sc.saemovel.model.entities.Alocacao;
import br.senai.sc.saemovel.model.entities.Automovel;
import br.senai.sc.saemovel.model.entities.Concessionaria;
import br.senai.sc.saemovel.model.service.AlocacaoService;
import br.senai.sc.saemovel.util.AutomovelUtil;
import br.senai.sc.saemovel.util.ConcessionariaUtil;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;

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

    @GetMapping
    public ResponseEntity<Object> findByAreaAndConcessionariaAndAutomovel(@RequestParam Integer area,
                                                                          @RequestParam String concessionariaJson,
                                                                          @RequestParam String automovelJson) {
        AutomovelUtil automovelUtil = new AutomovelUtil();
        Automovel automovel = automovelUtil.convertJsonToModel(automovelJson);

        ConcessionariaUtil concessionariaUtil = new ConcessionariaUtil();
        Concessionaria concessionaria = concessionariaUtil.convertJsonToModel(concessionariaJson);
        
        return ResponseEntity.status(HttpStatus.OK).body(alocacaoService.findByAreaAndConcessionariaAndAutomovel(area, concessionaria, automovel));
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
