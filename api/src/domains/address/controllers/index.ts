import { Router, Request, Response, NextFunction } from 'express';
import { AddressService } from '../services/AddressService';
import { verifyJWT, checkRole } from '../../../middlewares/auth-middlewares';
import { userRoles } from '../../users/constants/userRoles';
import { statusCodes } from '../../../../utils/constants/statusCodes';

export const router = Router();

router.get('/',
  verifyJWT,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const addresses = await AddressService.getAddress(req.user!);
      res.status(statusCodes.SUCCESS).json(addresses);
    } catch (error) {
      next(error);
    }
  },
);

router.put('/',
  verifyJWT,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await AddressService.update(req.body, req.user!.idUser);
      res.status(statusCodes.NO_CONTENT).end();
    } catch (error) {
      next(error);
    }
  },
);