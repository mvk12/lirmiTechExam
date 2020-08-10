<?php
namespace App\UseCases\Profesor;

use App\Repositories\Profesor\IProfesorRepository;
use App\Profesor;

class ProfesorDeleteUseCase
{
    private $profesorRepository;

    public function __construct(IProfesorRepository $profesorRepository)
    {
        $this->profesorRepository = $profesorRepository;
    }

    public function __invoke(int $id)
    {
        return $this->profesorRepository->Delete($id);
    }
}
