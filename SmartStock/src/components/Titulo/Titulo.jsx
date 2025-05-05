const Titulo = ({ nivel = 1, children }) => {
    const Tag = `h${nivel}`; // Cria dinamicamente: 'h1', 'h2', etc.

    // Estilos padrão para todos os títulos
    const estiloBase = 'font-Poppins';

    // Estilos específicos por nível
    const tituloClasse = nivel === 1
        ? 'text-3xl font-Poppins font-black text-primaria-10'
        : nivel === 2
        ? 'text-3xl text-gray-700'
        : nivel === 3
        ? 'text-2xl text-gray-600'
        : '';

    return (
        <Tag className={`${estilo} ${tituloClasse}`}>
            {children}
        </Tag>
    );
};

export { Titulo };
