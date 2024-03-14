import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  @Get()
  async getRequest(@Query() query: any, @Req() req: Request) {
    console.log('headers', req.headers);
    console.log('query', query);
    return {
      success: true,
      message: 'Get Request received successfully!',
    };
  }

  @Post()
  async postRequest(
    @Query() query: any,
    @Body() body: any,
    @Req() req: Request,
  ) {
    console.log('headers', req.headers);
    console.log('query', query);
    console.log('body', body);
    return {
      success: true,
      message: 'Post Request received successfully!',
    };
  }
}
