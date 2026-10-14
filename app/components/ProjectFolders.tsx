import Image from "next/image";
import { existingProjects } from "../projects-data";

export function ProjectFolders() {
  return (
    <div className="project-folders">
      {existingProjects.map((project) => (
        <details className="project-folder" id={project.id} key={project.id}>
          <summary className="project-folder__cover">
            <span className="project-folder__logo">
              <Image src={project.logo} alt={`Logo do projeto ${project.title}`} width={project.logoWidth} height={project.logoHeight} unoptimized />
            </span>
            <span className="project-folder__heading">
              <span className="eyebrow">Projeto em destaque</span>
              <span className="project-folder__title">{project.title}</span>
              <span className="project-folder__count">{project.photos.length} registros de ações</span>
              <span className="project-folder__action">
                <span className="project-folder__open-label">Abrir pasta</span>
                <span className="project-folder__close-label">Fechar pasta</span>
                <span className="project-folder__arrow" aria-hidden="true">↗</span>
              </span>
            </span>
          </summary>
          <div className="project-folder__contents">
            <div className="project-folder__intro">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <div className="project-folder__gallery-heading">
              <h3>Registros das ações</h3>
              <p>Selecione uma foto para ver em tamanho completo.</p>
            </div>
            <div className="project-gallery">
              {project.photos.map((photo, index) => {
                const src = `/projetos/${project.id}/${photo.file}`;
                return (
                  <figure className="project-gallery__photo" key={photo.file}>
                    <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Ver foto ${index + 1}: ${photo.alt} (abre em nova aba)`}>
                      <Image src={src} alt={photo.alt} width={photo.width} height={photo.height} unoptimized loading="lazy" />
                    </a>
                    <figcaption>{photo.alt}</figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
