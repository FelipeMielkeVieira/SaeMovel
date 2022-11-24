package br.senai.sc.saemovel.util;
import br.senai.sc.saemovel.model.entities.Automovel;
import com.fasterxml.jackson.databind.ObjectMapper;

public class AutomovelUtil {
    private ObjectMapper objectMapper = new ObjectMapper();

    public Automovel convertJsonToModel(String automovelJson) {
        try {
            return this.objectMapper.readValue(automovelJson, Automovel.class);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
