package br.senai.sc.saemovel.model.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "automoveis")
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@ToString @EqualsAndHashCode
public class Automovel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true)
    private Long id;

    @Column(nullable = false, length = 100)
    private String modelo;

    @Column(nullable = false)
    private Double preco;
}
