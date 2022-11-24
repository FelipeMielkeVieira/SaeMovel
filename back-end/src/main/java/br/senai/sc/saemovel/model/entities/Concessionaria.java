package br.senai.sc.saemovel.model.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "concessionarias")
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@ToString @EqualsAndHashCode
public class Concessionaria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true)
    private Long id;

    @Column(nullable = false, length = 100)
    private String nome;
}
