import React from "react";

const data = [
  { id: 1, title: "Título 1", subtitle: "Subtítulo 1" },
  { id: 2, title: "Título 2", subtitle: "Subtítulo 2" },
  { id: 3, title: "Título 3", subtitle: "Subtítulo 3" }
  // ... adicione mais objetos conforme necessário
];

const EleganteComponent = () => {
  return (
    <div style={styles.container}>
      {data.map((item) => (
        <div key={item.id} style={styles.card}>
          <div style={styles.titleContainer}>
            <h1 style={styles.title}>{item.title}</h1>
            <h2 style={styles.subtitle}>{item.subtitle}</h2>
          </div>
          <button style={styles.button}>Clique aqui</button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row", // Alterado para 'row'
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: "20px"
  },
  card: {
    width: "200px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
  },
  titleContainer: {
    marginBottom: "10px"
  },
  title: {
    color: "#333",
    fontSize: "1em",
    fontWeight: "bold"
  },
  subtitle: {
    color: "#666",
    fontSize: "0.8em"
  },
  button: {
    padding: "8px 16px",
    fontSize: "0.8em",
    fontWeight: "bold",
    color: "white",
    background: "#ff7e5f",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default EleganteComponent;
