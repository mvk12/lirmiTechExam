<?php
namespace App\Repositories\Profesor;

use App\Daos\ProfesorDao;

interface IProfesorRepository
{
    public function Create(ProfesorDao $profesorDao);

    public function Delete(int $profesorId);
}
