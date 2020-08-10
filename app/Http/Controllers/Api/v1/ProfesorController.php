<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Http\Request;

use App\Daos\ProfesorDao;
use App\Http\Controllers\Controller;
use App\Http\Requests\Profesor\ProfesorCreatorRequest;
use App\Repositories\Profesor\EloquentProfesorRepository;
use App\UseCases\Profesor\ProfesorCreatorUseCase;
use App\UseCases\Profesor\ProfesorDeleteUseCase;

class ProfesorController extends Controller
{
    public function List(Request $req)
    {
        return new \App\Http\Resources\ProfesorCollection(
            \App\Profesor::paginate()
        );
    }

    public function Create(ProfesorCreatorRequest $req)
    {
        $profesorDao = new ProfesorDao();
        $profesorDao->firstName = $req->get('first_name');
        $profesorDao->lastName = $req->get('last_name');
        $profesorDao->email = $req->get('email');

        \Log::info($profesorDao);

        $repository = new EloquentProfesorRepository();
        $useCase = new ProfesorCreatorUseCase($repository);

        try {
            $resultUseCase = $useCase($profesorDao);

            return response()
                ->json([
                    'message' => 'Profesor creado exitosamente',
                    'data' => $resultUseCase,
                ])
                ->setStatusCode(201);
        } catch (\Exception $ex) {
            $code = (int) $ex->getCode();
            if ($code < 400 || $code > 503) {
                $code = 500;
            }
            return response()
                ->json([
                    'error' => $ex->getMessage(),
                    'code' => $ex->getCode(),
                ])
                ->setStatusCode($code);
        }
    }

    public function Delete(Request $req, int $id)
    {
        try {
            $repository = new EloquentProfesorRepository();
            $useCase = new ProfesorDeleteUseCase($repository);
            $estatus = $useCase($id);

            return response()->json([
                'message' => 'Registro eliminado exitosamente',
                'data' => [
                    'id' => $id,
                ],
            ]);
        } catch (\Exception $ex) {
            $code = (int) $ex->getCode();
            if ($code < 400 || $code > 503) {
                $code = 500;
            }
            return response()
                ->json([
                    'error' => $ex->getMessage(),
                    'code' => $ex->getCode(),
                ])
                ->setStatusCode($code);
        }
    }
}
