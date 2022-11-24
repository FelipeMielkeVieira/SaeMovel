package br.senai.sc.saemovel.util;

import br.senai.sc.saemovel.model.entities.Automovel;
import br.senai.sc.saemovel.model.entities.Concessionaria;
import com.fasterxml.jackson.databind.ObjectMapper;

public class ConcessionariaUtil {
    private ObjectMapper objectMapper = new ObjectMapper();

    public Concessionaria convertJsonToModel(String concessionariaJson) {
        try {
            return this.objectMapper.readValue(concessionariaJson, Concessionaria.class);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
