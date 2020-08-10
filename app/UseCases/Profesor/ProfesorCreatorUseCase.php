<?php
namespace App\UseCases\Profesor;

use App\Daos\ProfesorDao;
use App\Repositories\Profesor\IProfesorRepository;

class ProfesorCreatorUseCase
{
    private $profesorRepository;

    public function __construct(IProfesorRepository $profesorRepository)
    {
        $this->profesorRepository = $profesorRepository;
    }

    public function __invoke(ProfesorDao $profesorDao)
    {
        return $this->profesorRepository->Create($profesorDao);
    }
}
