package br.senai.sc.saemovel.model.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "alocacao")
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@EqualsAndHashCode @ToString
public class Alocacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true)
    private Long id;

    @Column(nullable = false)
    private Integer area;

    @Column(nullable = false)
    private Integer quantidade;

    @ManyToOne
    @JoinColumn(name = "automoveis_id")
    private Automovel automovel;

    @ManyToOne
    @JoinColumn(name = "concessionarias_id")
    private Concessionaria concessionaria;
}
